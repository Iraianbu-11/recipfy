/* eslint-disable react/prop-types */
const RecipeItem = ({ title,  src,  cuisine, tags , mealType}) => {
  const shortTitle = title.split(' ').slice(0, 2).join(' ');
    return (
      <div
        className="card text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ maxWidth: "300px" }}
      >
        <img
          src={src}
          style={{ height: "200px", width: "200px"}}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title text-dark">{shortTitle}</h5>
          {
            tags.map((name) => {
              <p className="card-text text-dark"> {name}</p>
            })
          }
          <p className="card-text text-dark">{cuisine}</p>
          <p className="card-text text-dark">Tags: {tags.slice(0,2).join(', ')}</p>
          <p className="card-text text-dark">Type: {mealType.slice(0,2).join(', ')}</p>
        </div>
      </div>
    );
  };

export default RecipeItem;

