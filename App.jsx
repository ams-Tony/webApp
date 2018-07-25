import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestPage } from './service/action';
import InfiniteScroll from 'react-infinite-scroll-component';
import './font.css';
import './style.css';

class App extends React.Component {
  static propTypes = {
    page: PropTypes.number,
    totalPage: PropTypes.number,
    allData: PropTypes.any,
    pageRequest: PropTypes.func
  }
  state = {
    scrollHeight: 500,
    currentPage: this.props.page
  }
  componentDidMount() {
    this.calcHeight();
    window.addEventListener('resize', () => this.calcHeight());
  }


  calcHeight = () => {
    const scrollHeight = document.getElementById('ow-container').clientHeight;
    this.setState({ scrollHeight });
  }


  nextPage = () => {
    console.log('...nect')
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      this.props.pageRequest(this.state.currentPage);
    })
  }

  render() {
    const { allData, totalPage, page } = this.props;
    const { scrollHeight } = this.state;
    
    return (
      <div>
        <div>
          <img src= 'img/nav_bar.png' className='header'/>
          <img src='img/Back.png' className='header__back' />
          <div className='header__title'>{allData.title} </div>
        </div>
        <InfiniteScroll
          dataLength={allData['content-items']['content'].length / 20}
          next={this.nextPage}
          hasMore={totalPage !== page}
          height={scrollHeight} >
          <div className='container' id='ow-container'>
            {allData['content-items']['content'].map((each , i) => {
              const imgName = each['poster-image']
              const imgPath = 'img/' + imgName;
              
              return (<div key={i} className="img_slide">
                <img src={imgPath}/>
                <div  style={{ fontFamily: 'Titillium Web' }}>
                {each.name}</div>
              </div>)}
            )}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
  allData: state.allData,
  totalPage: state.totalPage
})

const dispatchToProps = (dispatch) => ({
  pageRequest: (page) => dispatch(requestPage(page))
})
export default connect(mapStateToProps, dispatchToProps)(App);
