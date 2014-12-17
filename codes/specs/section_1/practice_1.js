describe('practice-1-1', function () {

    it("获取百钱百鸡的所有方案的数组", function () {
        var result = hundred_hundred_chickens();
        console.dir(result);
        expect(result.length).toBe(4);
        expect(result[0].cock).toBe(0);
        expect(result[0].hen).toBe(25);
        expect(result[0].chicken).toBe(75);

        expect(result[1].cock).toBe(4);
        expect(result[1].hen).toBe(18);
        expect(result[1].chicken).toBe(78);

        expect(result[2].cock).toBe(8);
        expect(result[2].hen).toBe(11);
        expect(result[2].chicken).toBe(81);

        expect(result[3].cock).toBe(12);
        expect(result[3].hen).toBe(4);
        expect(result[3].chicken).toBe(84);
    });

});