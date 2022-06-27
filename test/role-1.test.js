const test = require('ava')
const { ElemType } = require('..')

class RoleLink extends ElemType
{
  static role = 'Link'
}

class FooLink extends RoleLink
{
}

class BarLink extends RoleLink
{
  static role = null
}

test('test #1', t => {
  const elem = ElemType.render({
    role : 'link',
    children : 'test',
  })

  t.is(elem.toString(), '<div role="link">test</div>')
})

test('test #2', t => {
  const elem = RoleLink.render('test')

  t.is(elem.toString(), '<div role="Link" class="RoleLink">test</div>')
})

test('test #3', t => {
  const elem = RoleLink.render({
    role : 'Button',
    children : 'test',
  })

  t.is(elem.toString(), '<div role="Button" class="RoleLink">test</div>')
})

test('test #4', t => {
  const elem = RoleLink.render({
    role : null,
    children : 'test',
  })

  t.is(elem.toString(), '<div class="RoleLink">test</div>')
})

test('test #5', t => {
  const elem = FooLink.render('test')

  t.is(elem.toString(), '<div role="Link" class="FooLink RoleLink">test</div>')
})

test('test #6', t => {
  const elem = BarLink.render('test')

  t.is(elem.toString(), '<div class="BarLink RoleLink">test</div>')
})
