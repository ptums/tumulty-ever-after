// extract value function
const extractValue = (data, value, link) => data.map(a => (a.link === link) ? a[value] : "" );
export default extractValue;