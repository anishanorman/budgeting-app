export const appStyles = {
    open: {
      main: {
        marginLeft: "200px",
      },
      nav: {
        nav: {
          width: "200px",
        },
        link: {
          link: {
            padding: "15px 20px",
          },
          label: {
            transition: "opacity 0.3s"
          },
          highlight: {
            borderLeft: "5px solid white",
            backgroundColor: "#5c426b",
            transition: "all 0.1s",
          },
        }
      }
    },
    closed: {
      main: {
        marginLeft: "50px",
      },
      nav: {
        nav: {
          width: "50px"
        },
        link: {
          link: {
            padding: "10px 13px",
          },
          label: {
            opacity: 0,
            transition: "opacity 0.3s"
          },
          highlight: {
            borderLeft: "5px solid white",
            backgroundColor: "#5c426b",
            transition: "all 0.1s",
          },
        }
      }
    },
  }

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]