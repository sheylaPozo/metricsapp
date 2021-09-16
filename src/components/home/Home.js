import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries/countries';
import Icon from '../Icon';
import formatNumber from '../../utilities/formatNumber';
import './Home.css';
import virus from '../../assets/virus.png';
import map from '../../assets/southamerica.png';

const Item = ({ confirmed, name }) => (
  <div className="Home-item-content">
    <div className="Home-item-icon">
      <Icon name="arrow_circle_right" />
    </div>
    <div className="Home-item-top">
      <img src={virus} alt="" className="Home-item-image" />
    </div>
    <div className="Home-item-bottom">
      <h4 className="App-title">{name}</h4>
      <p className="App-subtitle">{formatNumber(confirmed)}</p>
    </div>
  </div>
);

const Grid = ({ items = [] }) => (
  <ul className="Home-grid">
    {items.map(({ name, confirmed }) => (
      <li key={name} className="Home-grid-item">
        <Link to={`/country/${name}`}>
          <Item confirmed={confirmed} name={name} />
        </Link>
      </li>
    ))}
  </ul>
);

const Home = () => {
  const continent = 'South America';

  const dispatch = useDispatch();
  const { items, totalConfirmed, loading } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCountries(continent));
    }
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section>
      <header className="App-header">
        <Icon name="arrow_back_ios" />
        <h4>2021</h4>
        <h5 className="App-header-title">covid confirmed cases</h5>
        <Icon name="mic" />
        <div className="pl-5">
          <Icon name="settings" />
        </div>
      </header>
      <div className="Home-banner">
        <div className="Home-banner-left">
          <img src={map} alt="" className="App-map" />
        </div>
        <div className="Home-banner-right">
          <h1 className="App-title">{continent}</h1>
          <p className="App-subtitle">{`${formatNumber(totalConfirmed)} cases`}</p>
        </div>
      </div>
      <section className="Home-stats">
        <h5 className="App-section-title">STATS BY COUNTRY</h5>
        <Grid items={items} />
      </section>
    </section>
  );
};

export default Home;

Item.propTypes = {
  confirmed: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};
