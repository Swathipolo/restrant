const ListItem = props => {
  const {listData} = props
  const {
    restaurantName,
    name,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    dishType,
  } = listData

  return (
    <div>
      <h1>{restaurantName}</h1>
      <p>My Orders</p>

      <p>{name}</p>
      <img src={dishImage} alt={dishImage} />
      <p>{dishPrice}</p>
      <p>{dishCurrency}</p>
      <p>{dishCalories}</p>
      <p>{dishDescription}</p>
      <p>{dishAvailability}</p>
      <p>{dishType}</p>
    </div>
  )
}
export default ListItem
