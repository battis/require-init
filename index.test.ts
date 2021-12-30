import RequireInitialization from './index';

interface TestClass {
    actionRequiringInitialization();
    actionNotRequiringInitialization();
    actionThatInitializes();
}

test('RequireInitialization', () => {
    const testInstance: TestClass[] = [];
    for (let i = 0; i < 3; i++) {
        const Service = class extends RequireInitialization {
            static actionRequiringInitialization() {
                Service.requireInitialization();
                return true;
            }
            static actionNotRequiringInitialization() {
                return true;
            }
            static actionThatInitializes() {
                Service.markInitialized();
                return true;
            }
        };
        testInstance.push(Service);
    }

    for (let i = 0; i < testInstance.length; i++) {
        testInstance[i].actionThatInitializes();
        for (let j = 0; j < testInstance.length; j++) {
            expect(() =>
                testInstance[j].actionNotRequiringInitialization()
            ).toBeTruthy();
            if (j > i) {
                expect(() =>
                    testInstance[j].actionRequiringInitialization()
                ).toThrowError('initialized');
            } else {
                expect(() =>
                    testInstance[j].actionRequiringInitialization()
                ).toBeTruthy();
            }
        }
    }
});
