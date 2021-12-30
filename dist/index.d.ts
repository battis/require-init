/**
 * Core of a class that requires initialization before (some) actions can be taken
 */
export default abstract class RequireInitialization {
    private static initialized;
    static requireInitialization(): void;
    protected static markInitialized(): void;
}
