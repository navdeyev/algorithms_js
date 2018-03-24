describe('Demonstrates the \'bind\' and \'this\' concepts', () => {

    it('returns an introduction for Newton, because Isaac Newton context is implied', () => {
        const IsaacNewton = {
            name: 'Isaac Newton',
            introduce: function () {
                return `My name is ${ this.name }`;
            }
        };
        expect(IsaacNewton.introduce()).toBe('My name is Isaac Newton');
    });

    it('returns an introduction for Einstein in case the context was explicitly passed down with bind()', () => {
        //In an actual browser standalone introduce function's this will point to the global object - window.
        //Standalone introduce function will not produce an appropriate result until it is given a proper context;

        function introduce() {
            return `My name is ${ this.name }`;
        }

        //Using bound() we can create another function that will always have a passed down object as it's context
        const boundIntroduce = introduce.bind({name: 'Albert Einstein'});
        expect(boundIntroduce()).toBe('My name is Albert Einstein');
    });

    it('returns a broken introduction, in case the passed down context object does not have a name property', () => {
        function introduce() {
            return `My name is ${ this.name }`;
        }

        const boundIntroduce = introduce.bind({fullName: 'Galileo Galilei'});
        expect(boundIntroduce()).toBe('My name is undefined');
    });

    it('returns an introduction for Copernicus in case the reference to introduce function has been assigned to the object under a different name', () => {
        function introduce() {
            return `My name is ${ this.name }`;
        }

        const NicolausCopernicus = {
            name: 'Nicolaus Copernicus',
            greet: introduce
        };
        expect(NicolausCopernicus.greet()).toBe('My name is Nicolaus Copernicus');
    });

});