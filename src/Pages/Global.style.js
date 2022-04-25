import styled from 'styled-components'

export const colorMain = '#f1f1f6'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  transition: background 250ms;
`

export const DefaultButton = styled.button`
  background: inherit;
  color: #2d6be6;
  text-transform: uppercase;
  border: none;
  padding: .5rem;
  font-weight: bold;
  border-radius: .4rem;

  &:hover {
    background-color: #89aef5;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

`
