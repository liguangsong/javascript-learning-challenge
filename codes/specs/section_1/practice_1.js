describe('practice-1-1', function () {

    it("获取百钱百鸡的所有方案的数组", function () {
        var result = hundred_hundred_chickens();
        console.dir(result);
        expect(result.length).toBe(4);

        for(var i = 0; i < 4; i ++)
        {
            if(result[i].cock === 0)
            {
                expect(result[i].hen).toBe(25);
                expect(result[i].chicken).toBe(75);
                continue;
            }
            if(result[i].cock === 4)
            {
                expect(result[i].hen).toBe(18);
                expect(result[i].chicken).toBe(78);
                continue;
            }
            if(result[i].cock === 8)
            {
                expect(result[i].hen).toBe(11);
                expect(result[i].chicken).toBe(81);
                continue;
            }
            if(result[i].cock === 12)
            {
                expect(result[i].hen).toBe(4);
                expect(result[i].chicken).toBe(84);
                continue;
            }
        }
    });

});