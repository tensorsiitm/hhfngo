import "./Block.css";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
export const Block = (props) => {
  return (
    <>
      <div>
        <div>
          <div className="image">
            <img
              className="image__img"
              src={props.poverty.image}
              alt="Bricks"
            />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title mt-3 text-center">
                {props.poverty.header}
                <h6 className="underlineH61"></h6>
              </div>
              <div className="image__a">
                <a href={"#" + props.poverty.idFake} className="btn ac">
                  Read More
                </a>
                <span className="span1">
                  <ArrowForwardIosRoundedIcon />
                </span>
                <span className="span2">
                  <ArrowRightRoundedIcon />
                  <ArrowRightRoundedIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="roller">
            <div className="rolling"></div>
          </div>
        </div>
      </div>
    </>
  );
};
