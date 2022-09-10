const test = require('ava')
const { ElemType, HtmlA, HtmlB, HtmlDiv } = require('..')

test('test #1', t => {
  let div1, div2, a, b
  const elem = ElemType.render({
    id : 'root',
    children : div1 = new HtmlDiv({
      id : 'id1',
      children : a = new HtmlA(
        div2 = new HtmlDiv(
          b = new HtmlB('wow'),
        ),
      ),
    }),
  })

  t.is(elem.toString(), '<div id="root"><div id="id1"><a><div><b>wow</b></div></a></div></div>')
  t.is(b.closest(HtmlB), b)
  t.is(b.closest(HtmlDiv), div2)
  t.is(b.closest(HtmlA), a)
  t.is(b.closest(ElemType), b)
  t.is(b.closest(HtmlDiv, elem => elem.id === 'id1'), div1)
  t.is(b.closest(ElemType, elem => elem.id === 'root'), elem)
  t.is(a.closest(HtmlB), null)
})
