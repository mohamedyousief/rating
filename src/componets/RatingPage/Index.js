
import React from 'react'

const Index = ({x,num,setStart}) => {
  return (
    <div className="rating">
        <div className="header-logo"><svg width="17" height="16" ><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg></div>
        <div className="contant">
            <h3>how did we do ?</h3>
            <p>please let us know how we did with ur support 
            request all feedback is apprecited to help us imporove ur offering</p>
        </div>
        <div className="number">
            <span  className={num==='1' ? "back":"x"} onClick={()=>x('1')}>1</span>
            <span  className={num==='2' ? "back":"x"} onClick={()=>x('2')}>2</span>
            <span  className={num==='3' ? "back":"x"} onClick={()=>x('3')}>3</span>
            <span  className={num==='4' ? "back":"x"} onClick={()=>x('4')}>4</span>
            <span  className={num==='5' ? "back":"x"} onClick={()=>x('5')}>5</span>
        </div>
        <div className="btn">
            <button onClick={()=>setStart(false)}>Submit</button>
        </div>
    </div>
  )
}

export default Index