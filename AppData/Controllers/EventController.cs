using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
    using System.IO;

    public class EventController : ApiController
    {
        public JToken Get(string id = null)
        {
            return id == null ? this.GetAllJsonEventsAsArray() : GetSingleJsonFile(id);
        }

        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            File.WriteAllText(path + "../app/data/event/" + id + ".json", eventData.ToString(Formatting.None));
        }

        private static JToken GetSingleJsonFile(string id)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(System.IO.File.ReadAllText(path + "../app/data/event/" + id + ".json"));
        }

        private JArray GetAllJsonEventsAsArray()
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            var contents = Directory.GetFiles(path + "../app/data/event/")
                .Aggregate(string.Empty, (current, file) => current + File.ReadAllText(file) + ",");

            return JArray.Parse("[" + contents.Substring(0, contents.Length - 1) + "]");
        }
    }
}