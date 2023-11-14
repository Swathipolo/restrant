import {Component} from 'react'
import ListItem from '../ListItem'
import ListDish from '../ListDish'

class ListContainer extends Component {
  state = {listData: [], listDish: []}

  componentDidMount() {
    this.listBlogData()
  }

  listBlogData = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )

    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      restaurantId: eachItem.restaurant_id,
      restaurantName: eachItem.restaurant_name,
      restaurantImage: eachItem.restaurant_image,
      tableMenuList: eachItem.table_menu_list,
      menuCategory: eachItem.menu_category,
      menuCategoryId: eachItem.menu_category_id,
      menuCategoryImage: eachItem.menu_category_image,
      nextUrl: eachItem.nextUrl,
    }))
    this.setState({listData: updatedData})

    const updatedDish = data.map(eachDish => ({
      categoryDishes: eachDish.category_dishes,
      dishId: eachDish.dish_id,
      dishName: eachDish.dish_name,
      dishPrice: eachDish.dish_price,
      dishImage: eachDish.dish_image,
      dishCurrency: eachDish.dish_currency,
      dishCalories: eachDish.dish_calories,
      dishDescription: eachDish.dish_description,
      dishAvailability: eachDish.dish_Availability,
      dishType: eachDish.dish_Type,
    }))
    this.setState({listDish: updatedDish})
  }

  render() {
    const {listData, listDish} = this.state

    return (
      <div>
        <h1>UNI Resto Cafe</h1>

        {listData.map(eachList => (
          <ListItem listData={eachList} key={eachList.id} />
        ))}

        <ul>
          {listDish.map(eachDishItem => (
            <ListDish
              listDish={eachDishItem}
              key={eachDishItem.categoryDishes}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default ListContainer
