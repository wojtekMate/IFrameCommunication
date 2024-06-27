using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MainApp.Models;

namespace MainApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult FrameExample()
    {
        return View();
    }
    
    public IActionResult ChangeContext()
    {

        return View("FrameExample");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}