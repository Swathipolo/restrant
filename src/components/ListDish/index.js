const ListDish = props => {
  const {eachDishItem} = props
  const {
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    dishType,
  } = eachDishItem

  return (
    <li>
      <h1>{dishName}</h1>
      <p>{dishPrice}</p>
      <img src={dishImage} alt={dishImage} />
      <p>{dishDescription}</p>
      <p>{dishCurrency}</p>
      <p>{dishCalories}</p>
      <p>{dishAvailability}</p>
      <p>{dishType}</p>
    </li>
  )
}
export default ListDish
