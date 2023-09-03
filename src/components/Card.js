function Card({ cardInfo }) {
  console.log(cardInfo);

  let itemsArray = cardInfo.slice(1)[0];
  let skillsArray = itemsArray.skills;
  console.log(skillsArray);
  console.log(itemsArray);

  return (
    <div className="container-flex mt-3">
      <div className="card card-width" >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {cardInfo[0].firstName} {cardInfo[0].lastName}
          </h5>
          <div >
            <ul>
              {skillsArray.map((item) => (
                <div className="card-frame m-3">
                  <li className="card-item"style={{ backgroundColor: item.color }}>
                    Technology: {item.technology}
                  </li>
                  <li className="card-item">
                    Skill level: {item.skillLevel}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <a href="/#" className="btn btn-primary">
            Info
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
