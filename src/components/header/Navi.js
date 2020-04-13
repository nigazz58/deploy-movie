import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { language } from 'utils/common';
// import * as aroundActions from 'modules/around';
// import * as dataActions from 'modules/data';

import * as menuActions from 'modules/menu';

import styled from 'styled-components';

const MenuDialog = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  z-index: -1;
  transition: all 0.3s ease;
  opacity: 0;

  &.opened {
    visibility: visible;
    z-index: 1;
    opacity: 1;
  }

  .dimmed {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  ul {
    position: relative;
    display: inline-block;
    text-align: center;

    li.active {
      a {
        opacity: 1;
      }
    }

    a {
      font-size: 6rem;
      opacity: 0.4;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover,
      &:focus,
      &.active {
        opacity: 1;
      }
    }

    @media screen and (max-width: 480px) {
      a {
        font-size: 3rem;
      }
    }
  }
`;

const Navi = props => {
  // const classes = useStyles();
  const { onClose, menuList, open, history } = props;
  const dispatch = useDispatch();

  const handleLinkClick = path => {
    // dispatch(aroundActions.setPath(path));
    // history.push(`/around/${path}?${language}&page=1`);
    // dispatch(dataActions.setSelIdx(0));
    dispatch(menuActions.setActive(path));
    history.push(`/${path}`);
    onClose();
  };

  return (
    <MenuDialog className={open && 'opened'}>
      <div className="dimmed" onClick={onClose} />
      <ul>
        {menuList.map(menu => {
          return (
            <li key={menu.text} className={menu.active}>
              <a
                href={`${menu.path}`}
                onClick={e => {
                  e.preventDefault();
                  handleLinkClick(menu.path);
                }}
              >
                {menu.text}
              </a>
            </li>
          );
        })}
      </ul>
    </MenuDialog>
  );
};

Navi.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Navi);
