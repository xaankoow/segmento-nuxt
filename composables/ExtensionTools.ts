export default class ExtensionTools {
    public static  formatPrice(price: any) {
      if (price === null || price === undefined) {
        return null;
      }
      // Convert the price to a string
      price = price.toString();
    
      // Initialize an empty array to hold the parts of the formatted price
      let parts = [];
    
      // Split the price into groups of three digits from right to left
      for (let i = price.length; i > 0; i -= 3) {
        let part = price.substring(Math.max(i - 3, 0), i);
        parts.unshift(part);
      }
    
      // Define the names for powers of ten
      let powerNames = ["", " هزار", " میلیون", " میلیارد"];
    
      // Iterate through the groups and format them
      for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        let formattedPart = "";
    
        // Remove leading zeros and add the exact numbers for each digit
        let trimmedPart = part.replace(/^0+/, ""); // Remove leading zeros
        formattedPart += trimmedPart;
    
        if (formattedPart !== "") {
          formattedPart += powerNames[parts.length - i - 1];
          parts[i] = formattedPart;
        } else {
          parts[i] = "";
        }
      }
    
      // Remove empty parts
      parts = parts.filter((part) => part !== "");
    
      // Join the parts with " و " to form the final formatted price
      let formattedPrice = parts.join(" و ") + " تومان";
    
      return formattedPrice;
    }
}