exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('content').del()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        {id: 1, category_id: 1, english: 'Baby', Niuean: 'Tama Muke / Mukemuke'},
        {id: 2, category_id: 1, english: 'Child', Niuean: 'Tama'},
        {id: 3, category_id: 1, english: 'Sibling / Cousin', Niuean: 'Lafu'},
        {id: 4, category_id: 1, english: 'Younger sibling', Niuean: 'Tehina'},
        {id: 5, category_id: 1, english: 'Older sibling', Niuean: 'Taokete'},
        {id: 6, category_id: 1, english: 'Girl', Niuean: 'Tama fifine'},
        {id: 7, category_id: 1, english: 'Boy', Niuean: 'Tama taane'},
        {id: 8, category_id: 1, english: 'Grandchild', Niuean: 'Pulapulaola / Mokopuna'},
        {id: 9, category_id: 1, english: 'Niece', Niuean: 'Tamafifine he taokete'},
        {id: 10, category_id: 1, english: 'Nephew', Niuean: 'Tama taane he taokete'},
        {id: 11, category_id: 1, english: 'Sister (of male sibling)', Niuean: 'Mahakitaga'},
        {id: 12, category_id: 1, english: 'Brother (of female sibling)', Niuean: 'Tugaane'},
        {id: 13, category_id: 1, english: 'Parent', Niuean: 'Faimatua'},
        {id: 14, category_id: 1, english: 'Father', Niuean: 'Matua taane'},
        {id: 15, category_id: 1, english: 'Mother', Niuean: 'Matua fifine'},
        {id: 16, category_id: 2, english: 'Coconut crab', Niuean: 'Uga'},
        {id: 17, category_id: 2, english: 'Orange', Niuean: 'Fua moli'},
        {id: 18, category_id: 2, english: 'Raw fish', Niuean: 'Ota'},
        {id: 19, category_id: 2, english: 'Lemon', Niuean: 'Fua tipolo'},
        {id: 20, category_id: 2, english: 'Watermelon', Niuean: 'Fua meleni'},
        {id: 21, category_id: 2, english: 'Passionfruit', Niuean: 'Fua vine'},
        {id: 22, category_id: 2, english: 'Coconut loaf', Niuean: 'Pitako'},
        {id: 23, category_id: 2, english: 'Cake', Niuean: 'Keke'},
        {id: 24, category_id: 2, english: 'Mango', Niuean: 'Fua mago'},
        {id: 25, category_id: 2, english: 'Baked taro and pawpaw dish', Niuean: 'Takihi'},
        {id: 26, category_id: 2, english: 'Sausage', Niuean: 'Tosisi'},
        {id: 27, category_id: 2, english: 'Coconut', Niuean: 'Fua niu'},
        {id: 28, category_id: 2, english: 'Cabbage', Niuean: 'Kapisi'},
        {id: 29, category_id: 2, english: 'Cheese', Niuean: 'Siisi'},
        {id: 30, category_id: 2, english: 'Lollies', Niuean: 'Lole'},
        {id: 31, category_id: 2, english: 'Egg', Niuean: 'Fua'},
        {id: 32, category_id: 2, english: 'Kumara', Niuean: 'Timala'},
        {id: 33, category_id: 2, english: 'Coffee', Niuean: 'Kofe'},
        {id: 34, category_id: 2, english: 'Tea', Niuean: 'Ti'},
        {id: 35, category_id: 2, english: 'Cocoa', Niuean: 'Koko'},
        {id: 36, category_id: 2, english: 'Banana', Niuean: 'Futi'},
        {id: 37, category_id: 2, english: 'Apple', Niuean: 'Fua apala'},
        {id: 38, category_id: 3, english: 'Hello', Niuean: 'Fakaalofa atu'},
        {id: 39, category_id: 3, english: 'Goodbye', Niuean: 'Koe kia'},
        {id: 40, category_id: 4, english: 'Ten', Niuean: 'Hogofulu'},
        {id: 41, category_id: 4, english: 'One', Niuean: 'Taha'}

      ])
    })
}
