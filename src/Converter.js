import React from "react";
import axios from "axios";
import DetailsList from './DetailsList';
import Button from './Button';
import {AppGlobals} from './AppGlobals';
import styled from 'styled-components';

const InputField = styled.input`
  appearance: none;
  border: none;
  border-radius: 0;
  color: inherit;
  flex-grow: 1;
  height: 45px;
  margin-right: 20px;
  &::placeholder {
    color: ${props => props.theme.textColor};
  }

  &:focus {
    outline: none;
  }
`;
const CurrencyValue = styled.div`
  margin-top: -65px;
  padding-bottom: 5px;
`;
const SelectMenu = styled.select`
  border: none;
  border-radius: 0;
  color: inherit;
  flex-grow: 1;
  height: 35px;
  width: 100px;
  background: white;
  margin-right: 20px;
  &::placeholder {
    color: ${props => props.theme.textColor};
  }

  &:focus {
    outline: none;
  }
`;
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "EUR",
      toCurrency: this.props.currencyCode,
      amount: 1,
      currencies: []
    };
  }
  componentDidMount() {
    axios
      .get(AppGlobals.currencyApi)
      .then(response => {
        const currencyAr = ["SEK"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("Currency Unable", err);
      });
  }
  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(AppGlobals.currencyApi)
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(error => {
          console.log("Currency Unable", error.message);
        });
    } else {
      this.setState({ result: "Same Currency" });
    }
  };
  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };
  render() {
    return (
      <DetailsList>
      <dt>Currency Converter</dt>
      <dd>
          <InputField
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={event => this.setState({ amount: event.target.value })}
          />
          <SelectMenu
            name="from"
            onChange={event => this.selectHandler(event)}
            value={this.state.fromCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </SelectMenu>
          <SelectMenu
            name="to"
            onChange={event => this.selectHandler(event)}
            value={this.state.toCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </SelectMenu>
          <Button key='Convert' onClick={this.convertHandler} spacedOut>
            Convert
          </Button>
          </dd>
          <CurrencyValue style={{display:  this.state.result ? 'block' : 'none'}}>
                 {this.state.result && <h3>{this.state.result}</h3>}
          </CurrencyValue>
      </DetailsList>
    );
  }
}
export default Converter;