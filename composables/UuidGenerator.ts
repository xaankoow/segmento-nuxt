export default class UuidGenerator {
    public static generate(length = 8) {
        let character = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
        let result = "";

        for (let i = 0; i < length; i++) {
            let random = Math.random();
            let index = random * character.length;
            index = Math.floor(index);

            result += character[index];
        }

        return result;
    }
}