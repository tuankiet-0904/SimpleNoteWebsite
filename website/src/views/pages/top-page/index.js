import './toppage.scss';
function Toppage() {
  const listnode = [
    {
      id: 1,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
    {
      id: 2,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
    {
      id: 3,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
    {
      id: 4,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
    {
      id: 5,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
    {
      id: 6,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
    {
      id: 7,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
    {
      id: 8,
      keyword: 'lorem',
      memo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure!',
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <h1 style={{ fontSize: '20px' }}>Category 1</h1>
        <div className="list-note">
          {listnode.map((item) => (
            <div className="note-item" key={item.id}>
              <div className="inner">
                <div className="front">
                  <h1>{item.keyword}</h1>
                </div>
                <div className="back">
                  <p>{item.memo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <h1 style={{ fontSize: '20px' }}>Category 2</h1>
        <div className="list-note">
          {listnode.map((item) => (
            <div className="note-item" key={item.id}>
              <div className="inner">
                <div className="front">
                  <h1>{item.keyword}</h1>
                </div>
                <div className="back">
                  <p>{item.memo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Toppage;
