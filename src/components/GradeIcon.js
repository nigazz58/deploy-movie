import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.span``;

const Grade = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border-radius: 50%;
  font-size: 1rem;
  color: #fff;

  ${Text} {
    /* position: absolute;
    margin-top: 1px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
    color: inherit;
    font-size: inherit;
    line-height: 1;
    white-space: nowrap;
  }

  &.all {
    font-size: 0.875rem;
    background-color: #1abc9c;
  }

  &.twelve {
    background-color: #3498db;
  }

  &.fifteen {
    background-color: #f39c12;
  }

  &.nineteen {
    background-color: #e74c3c;
  }

  &.undetermined {
    font-size: 0.875rem;
    background-color: #8e44ad;
  }

  @media screen and (max-width: 600px) {
    width: 24px;
    height: 24px;
    font-size: 0.875rem;

    &.all,
    &.undetermined {
      font-size: 0.6875rem;
    }
  }
`;

const GradeIcon = ({ certification }) => {
  const classfied = () => {
    switch (certification) {
      case 'G':
        return (
          <Grade className="all">
            <Text>전체</Text>
          </Grade>
        );
      case 'PG':
        return (
          <Grade className="twelve">
            <Text>12</Text>
          </Grade>
        );
      case 'PG-13':
        return (
          <Grade className="fifteen">
            <Text>15</Text>
          </Grade>
        );
      case 'R':
      case 'NC-17':
        return (
          <Grade className="nineteen">
            <Text>19</Text>
          </Grade>
        );
      default:
        return (
          <Grade className="undetermined">
            <Text>미정</Text>
          </Grade>
        );
    }
  };

  return <>{classfied()}</>;
};

export default GradeIcon;

GradeIcon.propTypes = {
  certification: PropTypes.string.isRequired,
};
