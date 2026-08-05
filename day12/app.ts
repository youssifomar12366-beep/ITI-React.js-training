// ==========================================
// Part 1: Rectangle Custom Type
// ==========================================
class Rectangle {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public CalcCircumference(): number {
        return 2 * (this.width + this.height);
    }

    public static WhoAmI(): void {
        console.log("I am rectangle");
    }
}

// ==========================================
// Part 2: Square Custom Type (Inheritance)
// ==========================================
class Square extends Rectangle {
    constructor(side: number) {
        super(side, side); 
    }

    public override CalcCircumference(): number {
        return 4 * this.width;
    }

    public static override WhoAmI(): void {
        console.log("I am square");
    }
}

// ==========================================
// Part 3: TypeScript Features
// ==========================================

let Score: number | string = 100;
Score = "A+";
Score =5;

// 1. Interfaces
interface StudentProfile {
    name: string;
    university: string;
    academicYear: number;
}



// 2. Generics
function getFirstItem<T>(items: T[]): T {
    return items[0];
}

// 3. Enums
enum TrackName {
    ReactG1 = "React G1",
    DotNet = ".NET",
    Python = "Python"
}

// 4. Namespaces
namespace StringUtilities {
    export function capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}



// ==========================================
// Part 4: Design Pattern (Singleton)
// ==========================================

class AppSettings {
    private static instance: AppSettings;
    public theme: string;

    private constructor() {
        this.theme = "Light Mode";
    }

    public static getInstance(): AppSettings {
        if (!AppSettings.instance) {
            AppSettings.instance = new AppSettings();
        }
        return AppSettings.instance;
    }
}

