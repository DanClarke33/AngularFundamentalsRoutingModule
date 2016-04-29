using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AppData
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // NOTE: If we were using .Net for the delivery of the site instead of just html pages in a folder the defaults here would ensure we deliver the index page when angular html5 routing is used, 
            // this would give us the index page and angular will then apply it's routing on top just like when clicking through from the index
            // for now I'm achieving this instead using a urlrewrite in IIS
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}