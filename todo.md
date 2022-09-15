babe will die if has no bro nearby for 3 rounds



game >  findFamilyByName
        findAbilityByName



colot > babe done

坐标系 偏移 概率生成
        x -0.5
        y +0.5
blockIndex
0 1 2 3 4 5 ... 15
...

block
0 1 2 3 4 5 .... 15
...


todo:   
        1. ability
        2. mutation
        3. IF SOME ability over 70%  add to familyAbility
        4. swim to target nearby   r = 6
        5. 集群 ability
bug: 
        1.执行一定次数nextRound后 
        Uncaught TypeError: Cannot read properties of undefined (reading 'age')   class.js:84 
         at Game.nextRound (class.js:84:25)
         at HTMLDocument.<anonymous> (class.js:75:22)

         fixed maybe

        2. 后期 绿色颜色 不显示

        bug: 莫名其妙地消失了 ！

        3. maxMember >= 133 时 后续完全消失

        fixed

        4. babeLib 中元素无法超过256个

        ? 坐标系问题 ? yes  0,0的处理

        使用新的coordinate后解决

        5. babe > 10000 后有明显卡顿