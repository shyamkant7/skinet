using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecifications : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecifications()
        {
            AddIncludes(x => x.ProductType);
            AddIncludes(x => x.ProductBrand);
        }

        public ProductsWithTypesAndBrandsSpecifications(int id) : base(x => x.Id == id)
        {
            AddIncludes(x => x.ProductType);
            AddIncludes(x => x.ProductBrand);
        }
    }
}