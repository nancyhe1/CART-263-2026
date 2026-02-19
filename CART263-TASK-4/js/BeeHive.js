class BeeHive {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color || {
            r: 225,
            g: 183,
            b: 129
        };

        this.bees = []; // bees linked to this hive
        this.element = null;

        this.renderBeeHive();
        this.startAnimation();
    }

    // Attach bees to hive
    addBee(bee) {
        this.bees.push(bee);
    }

    // Count bees that are "at home"
    countBeesAtHome() {
        return this.bees.filter(bee => bee.isAtHome).length;
    }

    renderBeeHive() {
        const hive = document.createElement("div");

        hive.style.position = "absolute";
        hive.style.left = this.x + "px";
        hive.style.top = this.y + "px";
        hive.style.width = this.size + "px";
        hive.style.height = this.size + "px";
        hive.style.borderRadius = "50% 50% 45% 45%";
        hive.style.backgroundColor = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        hive.style.border = "4px solid #b98c4a";
        hive.style.cursor = "pointer";
        hive.style.display = "flex";
        hive.style.alignItems = "center";
        hive.style.justifyContent = "center";
        hive.style.fontSize = "14px";
        hive.style.fontWeight = "bold";

        // Entrance hole
        const hole = document.createElement("div");
        hole.style.width = this.size * 0.3 + "px";
        hole.style.height = this.size * 0.2 + "px";
        hole.style.backgroundColor = "#3b2a1a";
        hole.style.borderRadius = "50%";
        hole.style.position = "absolute";
        hole.style.bottom = "20%";

        hive.appendChild(hole);

        // Click event
        hive.addEventListener("click", () => {
            const count = this.countBeesAtHome();
            hive.innerText = count + " 🐝";
            setTimeout(() => {
                hive.innerText = "";
            }, 2000);
        });

        document.getElementsByTagName("main")[0].appendChild(hive);
        this.element = hive;
    }

    // Subtle floating animation
    startAnimation() {
        let direction = 1;
        let offset = 0;

        const animate = () => {
            offset += 0.1 * direction;

            if (offset > 5 || offset < -5) {
                direction *= -1;
            }

            this.element.style.transform = `translateY(${offset}px)`;
            requestAnimationFrame(animate);
        };

        animate();
    }
}
