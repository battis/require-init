/**
 * Core of a class that requires initialization before (some) actions can be taken
 */
 export default abstract class RequireInitialization {
    private static initialized = false;

    public static requireInitialization() {
        if (!this.initialized) {
            throw new Error(`${this['name']} not yet initialized`);
        }
    }

    protected static markInitialized() {
        this.initialized = true;
    }
}
