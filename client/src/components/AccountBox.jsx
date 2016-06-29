var React = require('react');

var AccountBox = React.createClass({

    render: function() {
        console.log(this.props.accounts);
        var allAccounts = this.props.accounts.map(function(acc, index){
            var deleteMe = function(){
                    this.props.onAccountDelete(acc.owner);
                }.bind(this)
                return(
                    <div key={index}>
                        <p>Name: {_.capitalize(acc.owner)}, Amount: £{acc.amount}</p>
                        <button onClick={deleteMe}>Delete</button>
                    </div>
                    )
            }.bind(this))

        return (
            <div>
                <h4>{this.props.type} Account Total: £{this.props.totalType}</h4>
                {allAccounts}
            </div>
        );
    }

});

module.exports = AccountBox;
