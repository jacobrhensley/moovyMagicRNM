using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace moovyMagicRNM.Controllers
{
    public class TestController : Controller
    {
        public ActionResult Index()
        {
            return View ();
        }

        public string PrintMessage()
        {
            return "<h1>Welcome!</><p>This is my first c sharp view!</p>";
        }

        public string Play(string name = "Jacob")
        {
            return "<h1>Welcome " + name + "!</><p>This is the play string!</p>";
        }
    }
}
