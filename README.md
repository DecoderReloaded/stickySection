# stickySection
This short jQuery API is to make your side sections floating on your webpage. eg. filters, important catalog section etc.

# Uses
      # Declare these classes in your css file
      .position-relative {
        position: relative;
      }
      .fixed-top,
      .fixed-bottom {
        position: fixed;
      }
      .position-static {
        position: static;
      }
      .position-absolute {
        position: absolute;
      }
      
      #in you jQuery file use it like this
      stickySection({
        headerStickyHeight : <provide your header height here>,
        stopBeforeFooter : <provide margin to be kept with footer>,
        sidebar : <provide jQuery object for your section to be sticky>,
        footer : <provide jQuery object for footer>,
        topMargin : <provide Margin from top you want to keep>,
        float : <true if section is floating relative to body else false>
      });
