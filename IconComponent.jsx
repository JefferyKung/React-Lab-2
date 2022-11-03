
function IconComponent({icon, title}) {
    return (
     
        <div className="button">
          <div className="icon">
              <i class={'fa fa-'+icon}> </i>
            </div>
            <span>{title}</span>
        </div>
     
    );
  }