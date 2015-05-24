using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ApiTrialSet
{
    class Program
    {
        private const string TestUrl = "http://www.xeno-canto.org/api/2/recordings?query=cnt:brazil";

        static void Main(string[] args)
        {
            GetRemoteContent().Wait();
        }

        private static async Task GetRemoteContent()
        {
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(TestUrl);

            if (response.IsSuccessStatusCode)
            {
                var responseBody = await response.Content.ReadAsStringAsync();
                var birds = JsonConvert.DeserializeObject<dynamic>(responseBody);

                Console.WriteLine("Success!");
                Console.WriteLine("Number of results: {0}", birds.numRecordings);

                foreach (var recording in birds.recordings)
                {
                    Console.WriteLine("Species: {0}; Location: {1}", recording.en, recording.loc);
                }
            }
			else
			{
				Console.WriteLine("Danger Will Robinson!");
			}

            Console.WriteLine("Press any key to continue ...");
            Console.ReadLine();
        }
    }
}