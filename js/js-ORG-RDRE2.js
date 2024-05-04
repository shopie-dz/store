
      // Extract data from the URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const productName = urlParams.get("productName");
      const productPrice = urlParams.get("price");
      const productImage = urlParams.get("image");
      const productDescription = urlParams.get("description");

      // Display the data on the page
      document.getElementById(
        "product-price"
      ).textContent = ` ${productPrice} دج `;
      document.getElementById("product-image").src =
        decodeURIComponent(productImage);

      // Set product name if available
      const productNameInput = document.getElementById("product-name");
      if (productName) {
        productNameInput.value = productName;
      }

      // Set product description if available
      const descriptionElement = document.getElementById("product-description");
      if (productDescription) {
        descriptionElement.textContent = productDescription;
      }
   