# Project Structure

```
app/
    common/                     # specific helper codes, only revelant for this project
        filter/
    component/                  # all components are here
        aaa/                    # aaa component
            aa1.component.ts    # aa1 component uses special aa1.service
            aa1.css
            aa1.html
            aa1.service.ts
            aa2.component.ts    # aa2 component has simple, inline, 5 lines or less of css and html
            aa3.component.ts    # aa2 and aa3 component use shared models and services
            aa3.css
            aa3.html
        bbb/                    # bbb component
            bb1.component.ts    # bb1 component uses shared models and services
            bb1.css
            bb1.html
            bb2.component.ts    # bb2 component uses shared models and services
            bb2.html
            bb2.css
    config/                     # configurations
        hello.config.ts
    shared/                     # shared modules, can be used by all components
        include/                # header, footer etc
            header.ts
            footer.ts
        model/                  # shared models
            aaa.ts
            bbb.ts
        service/                # shared services
            aaa.service.ts
            bbb.service.ts
    util/                       # generic helper codes, can be used by other projects
        filter/
assets/                         # non-angular2, ordinary html stuffs, following initializr structure
    img/
    css/
    js/                         # non-angular2, app js (only if absolutely necessary)
        vendor/                 # 3rd-party js libraries
index.html                      # landing page
```
