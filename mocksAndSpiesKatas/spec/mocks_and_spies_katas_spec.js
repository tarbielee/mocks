let Teacher = require ("../src/mocks_and_skies_katas")

describe("Teacher toString(), Test", function(){
    it("calls the getHairColor", function(){
        let teacher = new Teacher();
        spyOn(teacher, "getHairColor");
        teacher.getHairColor();
        expect(teacher.getHairColor).toHaveBeenCalled();
    });
    it("calls the getName", function(){
        let teacher = new Teacher();
        spyOn(teacher, "getName");
        teacher.getName();
        expect(teacher.getName).toHaveBeenCalled();
    });
});