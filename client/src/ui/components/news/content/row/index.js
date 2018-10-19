// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Main Component
const Row = ({
  title,
  author,
  time,
  url,
  onRowClick,
  id,
  onTrashClick,
}) => (
  <tr style={{ backgroundColor: '#fff', border: '1px #ccc' }}>
    <td style={{ color: '#333', fontSize: '13pt' }} onClick={() => onRowClick(url)}>
      {`${title} `}
      <small style={{ color: '#999' }}>{` - ${author} -`}</small>
    </td>
    <td onClick={() => onRowClick(url)} />
    <td style={{ color: '#333', fontSize: '13pt' }} onClick={() => onRowClick(url)}>{time}</td>
    <td className="text-center" onClick={() => onTrashClick(id)}>
      <i className="fa fa-trash" aria-hidden="true" />
    </td>
  </tr>
);

Row.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  onRowClick: PropTypes.func,
  onTrashClick: PropTypes.func,
};

Row.defaultProps = {
  title: '',
  author: '',
  time: '',
  url: '',
  id: '',
  onRowClick: () => null,
  onTrashClick: () => null,
};

export default Row;
