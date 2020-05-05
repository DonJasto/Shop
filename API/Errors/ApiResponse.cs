using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessaageForStatusCode(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessaageForStatusCode(int statusCode)
        {
            //switch c# 8,0 tryout
            return statusCode switch
            {
                400 => "A bad request..............",
                401 => "You are not authorized ...........",
                404 => "Resource not found ..............",
                500 => "Errors ...............",
                _ => null
            };
        }
    }
}