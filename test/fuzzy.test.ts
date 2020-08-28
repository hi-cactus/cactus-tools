import fuzzy from '../src/fuzzy';
import Users from '../assets/user.list';

test('val', () => {
    const val = fuzzy('technology', Users, { key: 'taskID' });
    expect(val.length).toBe(2);
});

// 测试splitType 是否生效
test('splitType', () => {
    const val = fuzzy('Shanghai', Users, {
        key: 'taskID',
        splitType: '|',
    });
    expect(val.length).toBe(3);
});

// 测试key 是否为搜索范围
//
test('splitType', () => {
    const val = fuzzy('77', Users, {
        key: 'taskID',
        keys: ['taskID', 'clientName'],
    });

    expect(val.length).toBe(5);
});
