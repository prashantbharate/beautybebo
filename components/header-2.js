function headertwo()
{
    return `
    <div> <img id="header-img" src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt=""></div>
    <div>
      <div id="header-2-2">
        
          <div class="nav-middle-two">
            <select name="categories" id="categories">
              <option value="All categories">All Categories</option>
              <option value="makeup">--Makeup</option>
              <option value="mom">--Mom and Baby Care</option>
              <option value="All categories">--Skin</option>
              <option value="makeup">--Hair</option>
              <option value="mom">--Personal Care</option>
              <option value="All categories">--Ayurveda</option>
              <option value="makeup">--Brands</option>
              <option value="mom">--Fragrance</option>
            </select>
            <input
              type="text"
              placeholder="Enter Your Search"
              class="search-nav-text"
            />
         
          <button class="search-nav">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="header-2-3" >
          <div><i style="padding:10px"class="fa-solid fa-heart"></i></div>
          <div><i style="padding:10px" class="fa-solid fa-user"></i></div>
          <div> <a href="login.html">My Account</a></div>
    </div>
    `
} 

export default headertwo;