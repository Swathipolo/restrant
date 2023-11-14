const ListItem = props => {
  const {listData} = props
  const {restaurantName, restaurantImage} = listData

  return (
    <div>
      <h1>{restaurantName}</h1>
      <p>My Orders</p>
      <img src={restaurantImage} alt={restaurantImage} />
    </div>
  )
}
export default ListItem
