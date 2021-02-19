import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./modal.css";

class Modal extends Component {
  componentDidMount() {
    console.log(`startTotal: ${this.props.student.starTotal}`);
    console.log(`star count: ${this.props.reward.starCount}`);
    // const bool = this.props.student.starTotal - this.props.reward.starCount >= 0 ? true: false;
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy()
  }

  // updateStudent(student, reward) {
  //   const newStudent = student;
  //   newStudent.starTotal = student.starTotal - reward.starCount;
  //   axios
  //     .put(
  //       `/api/students/${this.props.student._id}`,
  //       newStudent
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       window.location.href=`/student-home/${response.data._id}`; //not sure if this is needed
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div className="modal-btn">
        {/* TODO: Write a ternary statement. If the student stars greater than reward stars, display the button.
        BUT, else display something positive, "Keep going, you're almost there!" */}
        <button
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
          data-attribute={this.props.reward.starCount}
        >
          Use Stars
        </button>

        <button className="modal-trigger" data-target="modal1"></button>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <button
            type="button"
            className="modal-close close-button"
            data-dismiss="modal"
          >
            <span aria-hidden="true">×</span>
          </button>
          {/* {this.props.redeemValue && ( */}

          <div className="modal-content">
            <h4>Email Teacher?</h4>
            <p>Do you want to email your teacher to use your stars?</p>
            <button
              className="modal-close waves-effect waves-green btn-flat"
              type="submit"
              method="POST"
              action="SEND"
              // onClick={this.updateStudent(this.props.student, this.props.reward)}
              // onClick={async (student, reward) => {

              // axios
              //   .post(
              //     `/api/rewards/redeem/${this.props.reward._id}/student/${this.props.student._id}`,
              //     {}
              //   )
              //   .catch((err) => {
              //     console.log(err);
              //   });
              // axios
              //   .put(
              //     `/api/students/${this.props.student._id}`,
              //     this.props.student
              //   )
              //   .then((response) => {
              //     console.log(response.data);
              //     // history.push(`/student-home/${response.data._id}`); //not sure if this is needed

              //   })
              //   .catch((err) => {
              //     console.log(err);
              //   });

              // }}
            >
              Yes
            </button>
            <button className="modal-close waves-effect waves-red btn-flat disagree-btn">
              No
            </button>
          </div>
          {/* )} */}

          {this.props.student.starTotal - this.props.reward.starCount < 0 && (
            <div className="modal-content">
              <p>You're almost there! Keep earning stars to redeem rewards!</p>

              <button className="modal-close waves-effect waves-red btn-flat disagree-btn">
                Ok!
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
