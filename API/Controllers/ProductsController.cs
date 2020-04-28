using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        /// <summary>
        /// Api for get list of products
        /// </summary>
        /// <returns>List of products</returns>
        [HttpGet]
        public string GetProducts()
        {
            return "list of products";
        }

        /// <summary>
        /// Api for get the product
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Product</returns>
        [HttpGet("{id}")]
        public string GetProduct(int id)
        {
            return "product";
        }
    }
}