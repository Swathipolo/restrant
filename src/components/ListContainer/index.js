import {Component} from 'react'

import ListItem from '../ListItem'

class ListContainer extends Component {
  state = {listData: []}

  componentDidMount() {
    this.listBlogData()
  }

  listBlogData = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )

    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      restaurantName: eachItem.restaurant_name,
      restaurantImage: eachItem.restaurant_image,
      tableMenuList: eachItem.table_menu_list,
      menuCategory: eachItem.menu_category,
      menuCategoryImage: eachItem.menu_category_image,
      nextUrl: eachItem.nextUrl,
      categoryDishes: eachItem.category_dishes,
      dishId: eachItem.dish_id,
      dishName: eachItem.dish_name,
      dishPrice: eachItem.dish_price,
      dishImage: eachItem.dish_image,
      dishCurrency: eachItem.dish_currency,
      dishCalories: eachItem.dish_calories,
      dishDescription: eachItem.dish_description,
      dishAvailability: eachItem.dish_Availability,
      dishType: eachItem.dish_Type,
    }))
    this.setState({listData: updatedData})
  }

  render() {
    const {listData} = this.state

    return (
      <div>
        {listData.map(eachList => (
          <ListItem
            listData={eachList}
            key={eachList.dishId}
            name={eachList.dishName}
          />
        ))}
      </div>
    )
  }
}
export default ListContainer
