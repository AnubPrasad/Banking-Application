using System.ComponentModel.DataAnnotations;
using Backend.API.Services;
using Backend.DAL.Models;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDto loginDto)
    {
        var user = _authService.Authenticate(loginDto.Email, loginDto.Password);

        if (user == null)
            return Unauthorized();

        var token = _authService.GenerateToken(user);
        return Ok(new { Token = token });
    }
    [HttpPost("signup")]
    public async Task<IActionResult> Signup([FromBody] SignupDto signupDto)
    {
        try
        {
            // Validate the model
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Check if user already exists
            if (await _authService.UserExists(signupDto.Email))
                return BadRequest("Email already exists");

            // Create the user
            var user = await _authService.Signup(signupDto);

            return Ok(new { message = "User registered successfully" });
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }

    }

}

public class LoginDto
{
    public string Email { get; set; }
    public string Password { get; set; }
}