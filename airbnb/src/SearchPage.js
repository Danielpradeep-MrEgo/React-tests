import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest </p>
        <h1>Stays nearby</h1>
        <Button varient="outlined">Cancellation flexibility</Button>
        <Button varient="outlined">Type of place</Button>
        <Button varient="outlined">Price</Button>
        <Button varient="outlined">Rooms and Beds</Button>
        <Button varient="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6572ec23-1870-46d9-a3b8-e96703a62e7e.jpg?aki_policy=x_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-28743510/original/95ceb374-b678-4bd9-b15a-3aa7ed607d9f.jpeg?aki_policy=xx_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6572ec23-1870-46d9-a3b8-e96703a62e7e.jpg?aki_policy=x_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-28743510/original/95ceb374-b678-4bd9-b15a-3aa7ed607d9f.jpeg?aki_policy=xx_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6572ec23-1870-46d9-a3b8-e96703a62e7e.jpg?aki_policy=x_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-28743510/original/95ceb374-b678-4bd9-b15a-3aa7ed607d9f.jpeg?aki_policy=xx_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6572ec23-1870-46d9-a3b8-e96703a62e7e.jpg?aki_policy=x_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-28743510/original/95ceb374-b678-4bd9-b15a-3aa7ed607d9f.jpeg?aki_policy=xx_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6572ec23-1870-46d9-a3b8-e96703a62e7e.jpg?aki_policy=x_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-28743510/original/95ceb374-b678-4bd9-b15a-3aa7ed607d9f.jpeg?aki_policy=xx_large"
        location="Chennai"
        title="stay at this spacious house"
        description="8 recent guests said this place was sparkling clean."
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;
