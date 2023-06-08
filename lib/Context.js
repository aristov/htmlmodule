export class Context
{
  /**
   * @param {*} props
   * @constructor
   */
  constructor(props) {
    /**
     * @param {*} newProps
     * @param {*} children
     * @return {*}
     */
    this.Provider = ({ children, ...newProps }) => {
      props = newProps
      return children
    }
    /**
     * @param {function} render
     */
    this.Consumer = render => render(props)
  }
}
